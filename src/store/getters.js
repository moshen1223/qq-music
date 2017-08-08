// 歌手信息
export const singer = state => state.singer
// 播放状态
export const playing = state => state.playing
// 播放页面展示状态
export const fullScreen = state => state.fullScreen
// 顺序播放时播放列表
export const playlist = state => state.playlist
// 随机播放时播放列表
export const sequenceList = state => state.sequenceList
// 播放模式
export const mode = state => state.mode
// 当前播放位置
export const currentIndex = state => state.currentIndex
// 当前播放歌曲
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
// 歌词
export const disc = state => state.disc
// 排行榜列表
export const topList = state => state.topList
// 搜索历史
export const searchHistory = state => state.searchHistory
// 播放历史
export const playHistory = state => state.playHistory
// 喜爱列表
export const favoriteList = state => state.favoriteList
