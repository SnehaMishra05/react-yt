import 'remixicon/fonts/remixicon.css';
import RightCard from './RightCard';

const RightContent = ({ users }) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {users.map((user, idx) => (
          <RightCard key={user.tag || idx} id={idx} {...user} />
        ))}
    </div>
  )
}

export default RightContent