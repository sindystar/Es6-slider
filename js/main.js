const slider = document.querySelector("#slider");
const panel = slider.querySelector(".panel");
const btns = slider.querySelectorAll(".btns li");
const ring = slider.querySelector("#ring");

btns.forEach((el, index) => {
  el.addEventListener("click", e => {
    e.preventDefault();

    new Anim(panel, {
      prop: "margin-left",
      value: -100 * index + "%",
      duration: 1000,
    });

    //버튼 활성화 
    for (let btn of btns) {btn.classList.remove("on");}
    //모든 버튼들의 on틀래스를 지우는것 
    el.classList.add("on");
    //클릭한 대상의 바튼만 on 클래스 부여 

    ring.className = "";  //클래스 이름 없앤 효과 
    // 클래스 이름이 인덱스에 따라 다름 
    ring.classList.add("rot" + index)
  })
});


// for (let el of btns) {

// }

// for(let i =0; i<btns.length; i++) {
//   btns[i].addEventListener("click", ()=>)
// }
