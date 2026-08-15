'use client';
import Header from '../../components/Header';
import {useState} from 'react';

export default function Page(){
 const [type,setType]=useState<'teacher'|'center'>('teacher');
 const [done,setDone]=useState(false);
 const submit=(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault(); const data=Object.fromEntries(new FormData(e.currentTarget).entries()); const list=JSON.parse(localStorage.getItem('qt_reg