<template>
  <div class=" bordered resultsOfBattle">
    <h2>往年战果数对比</h2>
    <table>
      <thead>
        <tr>
          <th>年份</th>
          <th>破案数</th>
          <th>抓获嫌疑人</th>
          <th>并串案件</th>
          <th>现勘录入</th>
          <th>视侦录入</th>
          <th>合成案件数</th>
          <th>合计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2019</td>
          <td>222</td>
          <td>313</td>
          <td>124</td>
          <td>415</td>
          <td>116</td>
          <td>117</td>
          <td>518</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>211</td>
          <td>312</td>
          <td>411</td>
          <td>512</td>
          <td>116</td>
          <td>217</td>
          <td>618</td>
        </tr>
        <tr>
          <td>2021</td>
          <td>213</td>
          <td>313</td>
          <td>412</td>
          <td>512</td>
          <td>611</td>
          <td>117</td>
          <td>518</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "../views/_helper.scss";

.bordered {
  border: 1px solid #0764bc;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 0 2px 0 #0f3361, inset 0 0 2px 0 #0f3361;
  background-color: #0c1139;

  &::before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    border-radius: 4px;
    box-shadow:
      21px 0 0 -20px #0f3361,
      -21px 0 0 -20px #0f3361,
      0 21px 0 -20px #0f3361,
      0 -21px 0 -20px #0f3361,
      11px 0 0 -10px #0d4483,
      -11px 0 0 -10px #0d4483,
      0 11px 0 -10px #0d4483,
      0 -11px 0 -10px #0d4483,
    ;
  }
}


.resultsOfBattle {
  height: px(362);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    flex-shrink: 0;
    border: 1px solid #0a5299;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    font-size: px(22);
    line-height: px(24);
    padding: px(10) px(28);
    text-shadow: 0 0 px(3) white;
  }


  >table {
    margin-top: px(38);
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #1a3671;
    }

    thead {
      th {
        height: px(70);
        box-shadow: inset 0 0 px(60) 0 #1f3d85;
      }
    }

    tbody {
      td {
        height: px(50);
        width: px(84);
        background: #1c2456;
      }
    }
  }
}
</style>
