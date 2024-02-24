import React, { useState } from 'react';

function About() {
  // الحالة الأولية ليست معرفة هنا، تأكد من تعريفها أو إزالة الاستخدام إذا لم تكن ضرورية
  const [state, setState] = useState(0);

  let [count, setCount] = useState(0);
  
  // تحديث الحالة بشكل صحيح
  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={changeCount}>count: {count}</button>
    </div>
  );
}

export default About;
