<template>
  <table>
    <thead>
      <tr>
        <th colSpan="2">类型</th>
        <th>单数</th>
        <th>总计</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan='4'>入室盗窃</td>
        <td>翻窗入室</td>
        <td>20</td>
        <td rowSpan='4'>90</td>
      </tr>
      <tr>
        <td>撬门入室</td>
        <td>20</td>
      </tr>
      <tr>
        <td>技术开锁</td>
        <td>20</td>
      </tr>
      <tr>
        <td>撬防护栏</td>
        <td>30</td>
      </tr>
      <tr>
        <td rowSpan='2'>抢夺</td>
        <td>摩托车飞车抢夺</td>
        <td>22</td>
        <td rowSpan='2'>44</td>
      </tr>
      <tr>
        <td>徒手抢夺</td>
        <td>22</td>
      </tr>
      <tr>
        <td rowSpan='3'>扒窃</td>
        <td>公交车扒窃</td>
        <td>42</td>
        <td rowSpan='3'>70</td>
      </tr>
      <tr>
        <td>车站扒窃</td>
        <td>22</td>
      </tr>
      <tr>
        <td>街面扒窃</td>
        <td>45</td>
      </tr>
      <tr>
        <td rowSpan='2'>诈骗</td>
        <td>甩票子诈骗</td>
        <td>32</td>
        <td rowSpan='2'>112</td>
      </tr>
      <tr>
        <td>买手机诈骗</td>
        <td>90</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "../views/_helper.scss";

table {
  width: 100%;
  table-layout: fixed;
  margin-top: px(25);
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
      height: px(26);
      width: px(84);
      background: #1c2456;
    }
  }
}
</style>
