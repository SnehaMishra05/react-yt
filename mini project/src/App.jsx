import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'royalblue',
    tag: 'Satisfied',
    description: 'Satisfied customers are more likely to become repeat buyers and brand advocates, contributing to long-term business success.',
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'lightseagreen',
    tag: 'Underserved',
    description: 'Underserved customers often face challenges in accessing products or services, leading to unmet needs and potential market opportunities for businesses that can effectively cater to this segment.',
  },
  {
    img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'orange',
    tag: 'Underbanked',
    description: 'Underbanked individuals often face challenges in accessing traditional financial services, leading to limited opportunities for saving, borrowing, and participating fully in the economy.',
  },
];

const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 users={users} />
    </div>
  );
};
export default App