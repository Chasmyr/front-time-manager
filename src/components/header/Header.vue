<script>

export default {
  name: 'Header',
  components: {}
}

</script>

<template>
    <header>
        <div class="left-header">
            <div class="header-logo">
                <span>G</span>
            </div>
            <div>
                <h1 class="page-title">Dashboard</h1>
            </div>
        </div>
        <div class="right-header">
            <div class="user-acc text-xl font-medium text-pink-900">
                <span>Username</span>
            </div>
            <div class="user-logo">
                <img src="../../assets/icons8-utilisateur.png" alt="user-profile"/>
            </div>
        </div>
    </header>
</template>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 30px;
}
.page-title {
    margin: 0;
    font-size: 32px;
    font-weight: 400;
}
.left-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-logo {
    color: #ffeea2;
    font-size: 36px;
    font-weight: 600;
    border: solid 1px #ffeea2;
    padding: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 60px;
}
.right-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user-acc {
    font-size: 24px;
    font-weight: 400;
    margin-right: 10px;
    cursor: pointer;
}
.user-logo {
    display: flex;
    align-items: center;
}
.user-logo > img {
    widows: 45px;
    height: 45px;
    cursor: pointer;
}
</style>
