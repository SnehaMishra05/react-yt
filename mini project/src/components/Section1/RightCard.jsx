import RightCardContent from './RightCardContent'

const RightCard = ({ img, color, tag, description, id }) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl cursor-pointer'> 
          <img className='h-full w-full object-cover' src={img} alt="" />
          <RightCardContent color={color} description={description} tag={tag} id={id} />
    </div>
  )
}

export default RightCard