<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fetch from '@/fetch';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    fetch.get('/api/user/list').then((res) => {
      console.log(res);
      this.tableData = res.data;
    });
  },
});
</script>
