import React, { useState, useEffect } from 'react';
import * as tools from '../utils/tools'
import './index.css'
/**
 * 父级相对定位子集容器绝对定位;将多个五角星图层放上面，多个span图层放下面。利用backgroundImage背景图线性渐变来实现。
 * 有图片的background-image>background>background-color
 * 有颜色的，图片优先级高，先显示，然后显示颜色
 * 颜色：background-color>background
 */
/**
 * 
 * @param {Object} 传参
 */
const Rate = ({ size = 20, value = 0, count = 5, num = 5 }) => {
    const [rateJsx, setRateJsx] = useState([]);

    const restartHtml = ({ size = 20, value = 0, count = 5, num = 5 }) => {
        const currentRate = []
        const precent = (Number(value) / 5).toFixed(2);// 百分数
        const rateNum = Number(precent) * Number(num)
        for (let i = 0; i < num; i++) {
            let offset = 0
            if ((rateNum - 1) >= i) {
                offset = 100
            }
            if (parseInt(rateNum) === i) {
                offset = parseInt((rateNum - i) * 100)
            }
            // 生成uuid 用于下面的渐变色的id,不然id相同则多个rate组件会根据同一个id进行渲染!
            const uuid = tools.get_uuid();
            const svg = <div className='svgInDiv'>
                <svg t="1603935019259" className='top' viewBox="0 0 1076 1024" version="1.1" width={size} height={size}
                    xmlns="http://www.w3.org/2000/svg" p-id="5896" key={i}>
                    <defs>
                        <linearGradient id={`rate${uuid}`} grid x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset={`${offset}%`} style={{ stopColor: '#fadb14', stopOpacity: 1 }} />
                            <stop offset={`${offset}%`} style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M538.241705 862.527488l-199.149431 102.265924c-102.265924 53.824171-166.854929 5.382417-150.707677-107.648341l37.676919-220.679099-161.472511-156.090094c-80.736256-80.736256-53.824171-156.090095 59.206587-172.237346l220.679099-32.294502 96.883507-199.149431c48.441753-102.265924 134.560426-102.265924 183.00218 0l96.883507 199.149431 220.679099 32.294502c113.030758 16.147251 139.942843 96.883507 59.206588 172.237346l-161.472512 156.090094 37.67692 220.679099c21.529668 113.030758-48.441753 161.472512-150.707678 107.648341l-188.384597-102.265924z" fill="#FFFFFF" p-id="5897"></path><path d="M538.241705 862.527488l-199.149431 102.265924c-102.265924 53.824171-166.854929 5.382417-150.707677-107.648341l37.676919-220.679099-161.472511-156.090094c-80.736256-80.736256-53.824171-156.090095 59.206587-172.237346l220.679099-32.294502 96.883507-199.149431c48.441753-102.265924 134.560426-102.265924 183.00218 0l96.883507 199.149431 220.679099 32.294502c113.030758 16.147251 139.942843 96.883507 59.206588 172.237346l-161.472512 156.090094 37.67692 220.679099c21.529668 113.030758-48.441753 161.472512-150.707678 107.648341l-188.384597-102.265924z"
                        fill={`url(#rate${uuid})`} p-id="5898">
                    </path>
                </svg>
            </div>
            currentRate.push(svg)
        }
        setRateJsx(currentRate)
    }
    useEffect(() => {
        restartHtml({ size, value, count, num })
    }, [value])
    return <span style={{ height: size, width: num * size + num * 12 }} className='rate' >
        <span style={{ height: size }} className='topRate'>{rateJsx}</span>
    </span>
}
export default Rate;