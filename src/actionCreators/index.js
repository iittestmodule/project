export function next(currentPageNo) {
  return {
    type : "NEXT_PAGE",
    currentPageNo
  }
}

export function previous(currentPageNo) {
  return {
    type : "PREVIOUS_PAGE",
    currentPageNo
  }
}

export function answerTick(questionNo) {
  return {
    type : "TICK_ANSWER",
    questionNo
  }
}

export function answerUntick(id) {
  return {
    type : "UNTICK_ANSWER",
    questionNo
  }
}
