<template>
    <div>
        <discussion-item v-for = "dis in discussions" :key="dis.id" :title="dis.title" :content="dis.content">

        </discussion-item>
    </div>
</template>

<script>
import DiscussionItem from './DiscussionItem.vue';
export default{
    props:['discussions'],
    components:{
        DiscussionItem
    }
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>