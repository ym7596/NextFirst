

export const state = {
//상태
  

  page: 0,
  quest: [
	    {
	    q: "당신은 외향적인가요?",
	    a: [
			{
				text: "네",
				value: "e"
			},
			{
				text: "아니오",
				value: "i",
			}
		 ]
	    },
	    {
		q: "인식이 좋나?",
		a: [
			  {
				  text: "네",
				  value: "n"
			  },
			  {
				  text: "아니오",
				  value: "s",
			  }
		   ]
		},
		{
		q: "감정적 인가요",
		a: [
				{
					text: "네",
					value: "f"
				},
				{
					text: "아니오",
					value: "t",
				}
			]
		},
		{
			q: "즉흥적인가요",
			a: [
				{
					text: "네",
					value: "p"
				},
				{
					text: "아니오",
					value: "j",
				}
			]
		}
	],
	result: {
		e: 0,
		i: 0,
		s: 0,
		n: 0,
		t: 0,
		f: 0,
		p: 0,
		j: 0,

	}
}

export const mutations = {
 
//commit, state 변경
//질문 응답시 값들 저장
  SET_USER_TYPE(state, type) {
    state.result[type] += 1;
	state.page += 1;
  },
  SET_PAGE(state,page){
	  state.page = page;
  }
  ,
  PAGE_RESET(state) {
	state.page = 0;
	state.result = {
		e: 0,
		i: 0,
		s: 0,
		n: 0,
		t: 0,
		f: 0,
		p: 0,
		j: 0,
	}
  }
}

export const actions ={
// 액션..
  clickButton ({ commit }, type) {
    commit("SET_USER_TYPE",type);

  },
  clickResetButton ({ commit }) {
    commit("PAGE_RESET")
  }
  
  
}