<template>
 <div class="战果">
      <h2>往年战果数对比</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th><th>破案数</th><th>抓获嫌疑人</th><th>并串案件</th><th>现勘录入</th>
          <th>视侦录入</th><th>合成案件数</th><th>合计</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2015</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        <tr>
          <td>2016</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        <tr>
          <td>2017</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>
<script>

const px = (n) => { return n / 2420 * pageWidth }
export default {
   
}

</script>
<style lang="scss" scoped>
@import "../views/_helper.scss";



.战果 {
    height: px(363);
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
}

.战果 {
      > table {
        margin-top: px(38);
        border-collapse: collapse;
        th, td {
          border: 1px solid #1a3671;
        }
        thead {
          th {
            height: px(70);
            box-shadow: inset 0 0 px(60) 0 #1f3d85;
          }
        }
        tbody {
          td {height: px(50); width: px(84);
            background: #1c2456;
          }

        }
      }
    }
</style>
