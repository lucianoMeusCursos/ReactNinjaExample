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
  db.ref('videos').on('value', (snapshot) => {
    console.log('snapshot:', snapshot.val())
    snapshot.forEach((child) => {
      dispatch(addVideos(child.val()))
    })
  })
}


