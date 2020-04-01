<template>
    <div class="user">
        <div>User</div>
        <RecentReply></RecentReply>
    </div>
</template>

<script>
import RecentReply from '@/components/RecentReply.vue'


export default {
    name:"User",

    components:{
        RecentReply
    }
}
</script>