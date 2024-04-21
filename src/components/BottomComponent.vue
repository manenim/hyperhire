<script setup></script>

<template>
  <div style="width: 92%; margin-left: auto">
    <div class="row" style="padding-top: 5rem">
      <div class="left">
        <div class="left-sub">
          <img src="img/logo2.svg" alt="logo" style="margin-bottom: 0.5rem" />
          <div class="logo-box-text">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </div>
          <div class="logo-box-text">010-0000-0000</div>
          <div class="logo-box-text">aaaaa@naver.com</div>
        </div>
      </div>

      <div class="right">
        <div class="cads row">
          <div class="cad">
            <img src="img/code.svg" alt="card-icon" />
            <div class="text-weight-bolder" style="font-size: 1rem">
              해외 개발자 원격 채용
            </div>
            <div class="row q-mt-sm">
              바로가기
              <span><img src="/icons/arrow.svg" alt="arrow" /></span>
            </div>
          </div>
          <div class="cad">
            <img src="img/code.svg" alt="card-icon" />
            <div class="text-weight-bolder" style="font-size: 1rem">
              해외 개발자 원격 채용
            </div>
            <div class="row q-mt-sm">
              바로가기
              <span><img src="/icons/arrow.svg" alt="arrow" /></span>
            </div>
          </div>
          <div class="cad">
            <img src="img/code.svg" alt="card-icon" />
            <div class="text-weight-bolder" style="font-size: 1rem">
              해외 개발자 원격 채용
            </div>
            <div class="row q-mt-sm">
              바로가기
              <span><img src="/icons/arrow.svg" alt="arrow" /></span>
            </div>
          </div>
          <div class="cad">
            <img src="img/code.svg" alt="card-icon" />
            <div class="text-weight-bolder" style="font-size: 1rem">
              해외 개발자 원격 채용
            </div>
            <div class="row q-mt-sm">
              바로가기
              <span><img src="/icons/arrow.svg" alt="arrow" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="q-mt-xl bt-grid" style="">
        <div>
          <div class="b-text-head text-weight-bolder">상호명</div>
          <div>하이퍼하이어</div>
          <div class="text-weight-bold" style="width: 80%">
            Hyperhire India Private Limited
          </div>
        </div>
        <div>
          <div class="b-text-head text-weight-bolder">상호명</div>
          <div>하이퍼하이어</div>
          <div class="text-weight-bold" style="width: 80%">
            Hyperhire India Private Limited
          </div>
        </div>
      </div>
      <div class="bt-grid q-mt-xl">
        <div>
          <div class="b-text-head text-weight-bolder">상호명</div>
          <div>하이퍼하이어</div>
          <div class="text-weight-bold" style="width: 80%">
            Hyperhire India Private Limited
          </div>
        </div>
        <div>
          <div class="b-text-head text-weight-bolder">상호명</div>
          <div>하이퍼하이어</div>
          <div class="text-weight-bold" style="width: 80%">
            Hyperhire India Private Limited
          </div>
        </div>
      </div>
    </div>

    <div class="q-mt-xl q-pb-xl text-weight-bold">&copy; 2023 Hyperhire</div>
  </div>
</template>

<style scoped>
.left {
  width: 38%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding-right: 3rem;
  }
}

.left-sub {
  width: 70%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
}

.bt-grid {
  width: 38%;
  display: flex;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
}
.logo-box-text {
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.b-text-head {
  font-size: 1.1rem;
}

.cads {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 1.5rem;
}

@media (max-width: 768px) {
  .cads {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .cads {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
