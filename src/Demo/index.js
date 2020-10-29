import React, { useState } from 'react';
import Rate from '../Rate'
import './index.css'

const Demo = props => {
    const regx = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/

    const [inputValue, setInputValue] = useState(null)
    
    const onChange = (e) => {
        const value = regx.test(e.target.value) ? e.target.value : 0;
        setInputValue(value)
    }
    
    return <div className="rateBody"><input placeholder="请输入评分数值" onChange={onChange} /><Rate value={inputValue || 0} /></div>
}
export default Demo