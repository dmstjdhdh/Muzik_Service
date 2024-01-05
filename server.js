//require는 nodeJS에서 다른 패키지를 불러올 때 사용하는 키워드이다. express라는 모듈을 활용하겠다는 뜻으로 이해하자.
const express = require('express');
//app이라는 변수에 express 함수의 변환 값을 저장.
const app = express();
//process.env는 nodeJS에서 환경 변수를 가져올 때 사용된다.
const port = process.env.PORT || 3000;

//get Request를 정의.
app.get('/', (req, res) => {
    res.json({
        success:true,
    });
});

//express 서버 실행할 때 필요한 포트 정의 및 실행시 callback 함수
app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
})
