import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import getGameDetail from '../services/getGameDetail';
import DetailCard from './DetailCard';
import Loading from './Loading'

function Detail() {
  const id = useParams().id
  const [detail, setDetail] = useState({})

  useEffect(() => {
    async function getDetail(id) {
      setDetail(await getGameDetail(id))
    }
    try {
      getDetail(id)
    } catch (error) {
      alert(error.message)
    }
  }, [])

  if (Object.keys(detail).length) {
    return (
      <DetailCard id={detail.id}
        name={detail.name}
        background_image={detail.background_image}
        platformsName={detail.platformsName}
        description={detail.description}
        released={detail.released}
        rating={detail.rating}
        genresName={detail.genresName}
      />
    )
  } else {
    return (
      <Loading />
    )
  }


}
export default Detail