import $ from 'jquery'
import F2 from "@antv/f2"; //引入插件

/* 
  基金详情
*/
export function getFundDetail(fundData) {
  $.ajax({
    type: "GET",
    url:  "https://api.doctorxiong.club/v1/fund/detail?code=" + fundData.code,
    success: function (response) {
      console.log(response['data']['name'])
      fundData['name'] = response['data']['name']
    },
    error: function (err) {
      console.log('err::' + JSON.stringify(err))
    }
  });
}
/* 
  基金累计收益
*/
export function getFundAddInfo(fundData) {
  console.log("getFundCurInfo")

  //获取基金名称
  getFundDetail(fundData)

  $.ajax({
    type: "GET",
    url: "https://fundmobapi.eastmoney.com/FundMApi/FundYieldDiagramNew.ashx?" +
      "callback=jQuery311018968983467629652_1591665961187&FCODE="+fundData.code+"&RANGE="+fundData.time+"&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&Uid=8516335796029258&_=1591665961203",
    jsonpCallback: "jQuery311018968983467629652_1591665961187",
    dataType: "jsonp",
    success: function (response) {
      console.log('jquery基金累计收益::',JSON.stringify(response))
      var data = []//json数据
      var calc = [] //准备计算均线的列表
      //[1]组装数据 data = [...]
      for (var i = 0; i < response['Datas'].length; i++) {
        data.push({
          'time':response['Datas'][i]['PDATE'],
          'val':response['Datas'][i]['YIELD'],
          'type':'累计收益'
        })
        calc.push(response['Datas'][i]['YIELD'])
      }
      //[2]组装 data = [....,MA5,MA10,MA20,MA30均线]
      for(i = 0; i < 4; i++){
        var ma = []
        if(i == 0){
          ma = calculateMA(5, calc)
        }else{
          ma = calculateMA(5*2*i, calc)
        }

        for (var j = 0; j < response['Datas'].length; j++) {
          if(i == 0){ 
            data.push({
              'time':response['Datas'][j]['PDATE'],
              'val':ma[j],
              'type':'MA5'
            })
          }else{
            data.push({
              'time':response['Datas'][j]['PDATE'],
              'val':ma[j],
              'type':'MA'+5*2*i
            })
          }
          
        }
      }
      // console.log(data)
      //[3]生成图标
      generate(data)
    },
    error: function (err) {
      console.log('err::' + JSON.stringify(err))
    }
  });
}

/* 
  生成折线图
*/
export function generate(data){
  // Step 1: 创建 Chart 对象
  const chart = new F2.Chart({
    id: "container",
    pixelRatio: window.devicePixelRatio
  });
  //清空图表
  chart.clear()

  // Step 2: 载入数据源
  chart.source(data, {
    "time": {
      tickCount: 4
    }
  });
  // 设置图例居中显示
  chart.legend({
    align: "center",
    itemWidth: true // 图例项按照实际宽度渲染
  });
  // tooltip 与图例结合
  chart.tooltip({
    showCrosshairs: true
  });
  chart
    .line()
    .position("time*val")//time---x轴，val----y轴
    .color("type")
    .style("type");
  /* chart
    .point()
    .position("time*val")
    .color("type"); */
  chart.render();
}

/* 
  计算均线
*/
export function calculateMA(dayCount, data) {
  var result = [];
  for (var i = 0, len = data.length; i < len; i++) {
    if (i < dayCount) {
      result.push(0);
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data[i - j];
    }
    result.push((sum / dayCount).toFixed(1));
  }
  return result;
}