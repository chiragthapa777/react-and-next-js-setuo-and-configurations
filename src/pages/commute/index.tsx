import React from 'react'
import {useLoadScript} from '@react-google-maps/api'

export default function index() {
  const {   } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });
  return (
    <div>Commute</div>
  )
}
