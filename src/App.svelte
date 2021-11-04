<script lang="ts">
  import axios from "axios";

  const myAPI = axios.create({
    baseURL: "http://localhost/api/",
    timeout: 12000,
  });

  let resultList: ArrayLike<{ id: string; name: string }> = [];
  type axiosData = {
    result: [];
  };
  myAPI.get<axiosData>("projects", {}).then((res) => {
    console.log("result: ", res.data);
    if (res.data) resultList = res.data.result;
  });
</script>

{#each resultList as project}
  <dir>
    <h2>{project.name}</h2>
  </dir>
{/each}
