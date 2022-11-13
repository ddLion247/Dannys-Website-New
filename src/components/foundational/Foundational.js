import './Foundational.css';
import { useState } from 'react';
import React from 'react';

export function Foundational() {

    const [count, setCount] = useState(0);

    return (
        <div className='silly'>Counter
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
        //make this hold the countdata
    )
}

// Path: src\components\foundational\Foundational.css

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var averageValue = function(nums) {
//     let y = 0
//     let z = 0
//     nums.forEach(num=> {
//         if(num%6===0)
//             {
//                 y+=num
//                 z+=1
//             }
//     })
//     return (Math.floor(y/z) || 0)
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var longestSubarray = function(nums) {
//     let x = 0
//     let y = 0
//     let z = 0
//     nums.forEach(num=> {
//         if(num===1)
//             {
//                 x+=1
//             }
//         else
//             {
//                 if((x+y)>z){
//                     z=x+y
//                 }
//                 y = x
//                 x = 0
//             }
//     })
//     if((x+y)>z){
//         z=x+y
//     }
//     if(x===nums.length){
//         return x-1
//     }
//     return z
// };

// NO ONE WILL WANT TO HIRE YOU IF YOU DONT USE DESCRIPTIVE VARIABLE NAMES