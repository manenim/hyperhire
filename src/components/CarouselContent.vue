<script setup>
import {ref} from 'vue'
const props = defineProps(['name', 'img', 'years'])

</script>

<template>
    <div>
        <div class="slideContainer">
            <img :src="props.img" alt="avatar" />

            <div class="text-weight-bold text-h5">{{props.name}}</div>
            <div class="text-weight-bold text-subtitle1 text-secondary">마케팅 · {{props.years}}y+</div>

            <div class="q-mt-lg">
                <div class="carousel-subtext">마케팅 콘텐츠 제작</div>
                <div class="carousel-subtext">인스타그램 관리</div>
            </div>
            <div style="display: flex; justify-content: space-between; width: 100%;">
                <div class="carousel-subtext bt-txt">트위터 관리</div>
                <div class="carousel-subtext bt-txt">블로그 글 작성</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.slideContainer {

    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.8rem;
    cursor: pointer;

    img{
        border-radius: 90px;
        width: 130px;
        height: 130px;
        margin-bottom: .7rem;
        
    }

    .carousel-subtext {
        border: 1px solid rgba(0, 0, 0, .6);
        border-radius: 5px;
        padding: 5px 4px 2px 0px ;
        text-align: center;
        margin-bottom: .5rem;
        padding: 8 16px 8 16px;
    }
    .bt-txt{
        width: 50%;
    }
}
</style>