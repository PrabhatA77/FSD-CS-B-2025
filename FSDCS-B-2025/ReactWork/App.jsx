const parent=document.getElementById('parent')
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement('h2',{style:{color:'brown',backgroundColor:'aqua'}},'Welcome to React App');

// const li1 = React.createElement('li',{},'Java');
// const li2 = React.createElement('li',{},'Python');
// const li3 = React.createElement('li',{},'React');


// const ul = React.createElement('ul',{style:{backgroundColor:'aquamarine'}},li1,li2,li3);

// const pic = React.createElement('img', {
//     src: 'https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg',
//     style: {width: '200px', height: '200px',borderRadius:'50%'}
// });
// const myName = React.createElement('h3',{},'Prabhat Singh');
// const wrap = React.createElement('div',{style:{display:'flex',gap:'200px'}},pic,myName);


// const wrapper = React.createElement('div',{},h2,wrap,ul);


// root.render(wrapper);
// root.render(wrapper);

const h2 = <h2>Hello using jsx</h2>
const li1 = <li>Java</li>
const li2 = <li>Python</li>;
const ul = <ul>{li1}{li2}</ul>
const container = (<div>{h2}{ul}</div>)
root.render(container);