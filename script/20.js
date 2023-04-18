document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.box');
    const bt1 = document.querySelector('#bt1');
    //초기배열 : 1이 폭탄 위치
    let arr = [0,0,0,0,0,0,0,0,1] ;
    //클릭확인
    let flag = true;
    //하트갯수
    let cnt = 0;
    //눌러진 순서
    let selarr = [];

    //폭탄섞기 버튼
    bt1.addEventListener('click',  () =>{
        if(flag){
            arr.sort(() => Math.random()-0.5);
            console.log(arr);
            flag = false;
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = '';
            for(let box of boxs) {
                box.innerHTML = box.getAttribute('id').replace('box','');
        }
    }
    });

    for(let box of boxs){
        //박스번호 넣기
        //box.innerHTML = box.getAttribute('id').slice(-1);
        box.innerHTML = box.getAttribute('id').replace('box','');
        
        //박스 클릭이벤트 처리
        box.addEventListener('click',()=>{
            //let n = parseInt(box.getAttribute('id').replace('box',''));
            
            let n = parseInt(box.textContent);
            //기존에 하트나 폭탄이 들어있는경우
            if(isNaN(n)) return;

            if(!flag){
                //선택 항목 추가
                selarr.push(n);
                cnt++;

            //폭탄 하트 구분
            if(arr[n-1] == 0){
                //하트
                box.innerHTML = '<img src="./image/hart.png">';
                if(cnt == 8){
                    flag = true;
                    document.querySelector('h2').innerHTML = "성공!!"

                    //차집합 이용
                    //let lastArr = [1,2,3,4,5,6,7,8,9].filter((item) => !selarr.includes(item))
                    //boxs[lastArr[0]-1].innerHTML = '<img src="./image/hart.png">';

                    //1이 있는 위치 찾기
                    let lastn = arr.findIndex((item)=>item == 1);
                    boxs[lastn].innerHTML = '<img src="./image/hart.png">';
                }
            } else {
                //폭탄
                box.innerHTML = '<img src = "./image/boom.png">';
                flag = true;
                document.querySelector('h2').innerHTML = "실패!!!"
            }
        }
        });
    }
});