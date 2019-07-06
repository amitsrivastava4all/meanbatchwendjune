var arr = [10,20,30,1,10,20,10];
undefined
arr.forEach(y=>console.log(y));
VM353:1 10
VM353:1 20
VM353:1 30
VM353:1 1
VM353:1 10
VM353:1 20
VM353:1 10
undefined
arr;
(7) [10, 20, 30, 1, 10, 20, 10]
var x = [[10,20,30],[90,100,1010]];
undefined
x.forEach(y=>console.log(y));
VM593:1 (3) [10, 20, 30]
VM593:1 (3) [90, 100, 1010]
undefined
x.forEach(y=>y.forEach(z=>console.log(z)));
VM679:1 10
VM679:1 20
VM679:1 30
VM679:1 90
VM679:1 100
VM679:1 1010
undefined
x;
(2) [Array(3), Array(3)]
arr;
(7) [10, 20, 30, 1, 10, 20, 10]0: 101: 202: 303: 14: 105: 206: 10length: 7__proto__: Array(0)
var sub = arr.filter(z=>z==10);
undefined
sub;
(3) [10, 10, 10]
var q = arr.filter(r=>true);
undefined
q;
(7) [10, 20, 30, 1, 10, 20, 10]
var q = arr.filter(z=>z>0);
undefined
q;
(7) [10, 20, 30, 1, 10, 20, 10]
arr.sort((a,b)=>a-b);
(7) [1, 10, 10, 10, 20, 20, 30]
arr.sort((a,b)=>b-a);
(7) [30, 20, 20, 10, 10, 10, 1]
var names= ["tim","amit","anil","ram","ajay"];
undefined
"amit"-"anil";
NaN
"amit".localeCompare("anil");
-1
"ram".localeCompare("anil");
1
"ram".localeCompare("ram");
0
names.sort((a,b)=>a.localeCompare(b));
(5) ["ajay", "amit", "anil", "ram", "tim"]
names.sort((a,b)=>b.localeCompare(a));
(5) ["tim", "ram", "anil", "amit", "ajay"]
"amit"=="amit";
true
arr;
(7) [30, 20, 20, 10, 10, 10, 1]
var t = arr.map(q=>"Rs "+q+ ".00");
undefined
t;
(7) ["Rs 30.00", "Rs 20.00", "Rs 20.00", "Rs 10.00", "Rs 10.00", "Rs 10.00", "Rs 1.00"]
arr;
(7) [30, 20, 20, 10, 10, 10, 1]
arr.map(q=>"Rs "+q+ ".00").forEach(z=>console.log(z));
VM1783:1 Rs 30.00
VM1783:1 Rs 20.00
VM1783:1 Rs 20.00
VM1783:1 Rs 10.00
VM1783:1 Rs 10.00
VM1783:1 Rs 10.00
VM1783:1 Rs 1.00
undefined
t.forEach(q=>console.log(q));
VM1900:1 Rs 30.00
VM1900:1 Rs 20.00
VM1900:1 Rs 20.00
VM1900:1 Rs 10.00
VM1900:1 Rs 10.00
VM1900:1 Rs 10.00
VM1900:1 Rs 1.00
undefined
arr;
(7) [30, 20, 20, 10, 10, 10, 1]
arr.map(q=>(q+q*0.05));
(7) [31.5, 21, 21, 10.5, 10.5, 10.5, 1.05]
arr.reduce((acc,ele)=> acc+=ele,acc=0);
101
arr.reduce((acc,ele)=> {
console.log("Acc is ",acc," Ele is ",ele);
return acc+=ele
},acc=0);
VM2250:2 Acc is  0  Ele is  30
VM2250:2 Acc is  30  Ele is  20
VM2250:2 Acc is  50  Ele is  20
VM2250:2 Acc is  70  Ele is  10
VM2250:2 Acc is  80  Ele is  10
VM2250:2 Acc is  90  Ele is  10
VM2250:2 Acc is  100  Ele is  1
101
arr;
(7) [30, 20, 20, 10, 10, 10, 1]
arr.reduce((acc,ele)=>{
if(ele==10){
acc.push(ele);

}
return acc;
},acc=[]);
(3) [10, 10, 10]
arr.reduce((acc,ele)=>{
if(ele>acc){
acc  = ele;
}
return acc;
},acc=arr[0]);
30
arr;
(7) [30, 20, 20, 10, 10, 10, 1]
arr.push(100);
8
arr;
(8) [30, 20, 20, 10, 10, 10, 1, 100]
arr.reduce((acc,ele)=>{
if(ele>acc){
acc  = ele;
}
return acc;
},acc=arr[0]);
100
arr.reduce((acc,ele)=>{
acc.push(ele);
return acc;
},acc=[]);
(8) [30, 20, 20, 10, 10, 10, 1, 100]
