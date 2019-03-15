<template>
  <div id="app">
      <div class="seedemailbg">
          <div class="emailimg">
            <img src="./images/seedtop.png" />
          </div>
      </div>
      <div class="seedtext">
        <h1>布谷农场种子玩法</h1>
        <section class="centerimg">
             <img src="./images/seed.png" />
        </section>
       <section class="seedcontent">
         获取途径：农场中赠送<br>
         使用方法：农BGT是布谷生态内价值流通凭证，用户可在布谷收取BGT。并可以使用BGT在布谷中内购买商品或参与其他活动等...
       </section>
       <section class="centerimg">
             <img src="./images/seed.png" />
        </section>
       <section class="seedcontent">
         获取途径：农场中赠送<br>
         使用方法：农BGT是布谷生态内价值流通凭证，用户可在布谷收取BGT。并可以使用BGT在布谷中内购买商品或参与其他活动等...
       </section>
       <button class="gofarmbtn">前往农场</button>
      </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  
}
</script>

<style>
#app{width: 100%}
body{background:#FFDC8E;font-family: 'PingFang-SC-Medium','microsoft yahei';}
.seedemailbg{width: 100%}
.emailimg{width: 100%}
.emailimg img{width: 100%}
.seedemailbg{width: 100%;background: #FFF9DE; border-radius: 10px }
.seedtext{width: 90%; margin:10px auto; }
.seedtext h1{width: 80%;color: #D07707; text-align: center; font-size:18px; line-height: 38px; margin:10px auto; border-bottom:#FFD884 solid 1px  }
.centerimg{ text-align: center; margin-top: 20px}
.seedcontent{ text-align: left; font-size: 16px; color:#D07707 ; margin-top: 20px}
.gofarmbtn{width:100%; background:#FCC456; border-radius: 10px; font-size: 16px; height: 50px; line-height: 50px; text-align: center; border: 0; margin: 10px auto; color: #FFF }
</style>
