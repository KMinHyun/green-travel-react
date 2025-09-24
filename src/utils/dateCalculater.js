export const dateCalculater = {
  /**
   * 현 시간에서 timestamp만큼 뺀 과거의 날짜를 Date객체로 반환
   * @param {number} timestamp 
   * @returns {Date} Date
   */
  getPastDate: (timestamp) => {
    const now = new Date();
    return new Date(now - timestamp);
  }
}