import { ADD_VIDEO } from './actions';
import { db } from '../../../config/firebase';

export const registerVideo = ({ id, title}) => async (dispatch) => {
  console.log('video cadastrando...')
  await db.ref('videos').child(id).update({ id, title })

  console.log('video cadastrado!')
  dispatch(addVideos({id, title}))

}

export const addVideos = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
})

export const fetchVideos = () => (dispatch) => {
  // Traz os videos sem ordenar
  // db.ref('videos').on('value', (snapshot) => {
  //   console.log('snapshot:', snapshot.val())
  //   snapshot.forEach((child) => {
  //     dispatch(addVideos(child.val()))
  //   })
  // })

  // Ordenando pelo firebase
  // db.ref('videos').orderByChild('title').on('child_added', (child) => {
  //   console.log(child.val())
  //   dispatch(addVideos(child.val()))
  // })

  // Ordenando via JS.
  db.ref('videos').on('value', (snapshot) => {
    const videos = snapshot.val()
    Object.keys(videos)
      .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
      .forEach((id) => dispatch(addVideos({
        id,
        title: videos[id].title
      })))
  })



}


