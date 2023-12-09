import Map from "../assets/map.svg?react";

export default function Card(props: any) {
  return (
    <div className='card card-side bg-base-100 flex-row! gap-5'>
      <img className='h-72 w-60 object-cover rounded-xl' src={props.imageUrl} />
      <div className='card-body'>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-2 uppercase'>
            <Map className='w-3' />
            <p>{props.location}</p>
          </div>
          <a className='link text-gray-500' href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className='text-3xl font-bold'>{props.title}</h1>
        <p className='font-bold mt-5 flex-grow-0'>
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
