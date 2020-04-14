<template>
    <div class="panel">
        <header>最近创建的话题</header>
        <template v-for="item in user.recent_topics">
            <div :key="item.id">
                <router-link :to="{path:'/topic/' + item.id}">{{item.title}}</router-link>
             <div class="main">
              <router-link class="avatar" :to="{path:'/user/' + item.author.loginname}">
                <img :src="item.author && item.author.avatar_url"  alt="头像">
              </router-link>
              <router-link :to="{path:'/topic/' + item.id}">
              {{item.title}}</router-link>
             </div>
             </div>
        </template>
    </div>
</template>