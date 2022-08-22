import React from 'react';

export default function Tower({ pole1, pole3, pole2, numDisk }: TowerProps) {

  if (numDisk <= 0) {
    return <></>
  }
  return (
    <>
      <Tower pole1={'pole1'} pole2={'pole2'} pole3={'pole3'} numDisk={numDisk-1} />
      <p>Move Disk {numDisk} FROM {pole1} TO {pole3}</p>
      <Tower pole1={'pole2'} pole2={'pole3'} pole3={'pole1'} numDisk = {numDisk - 1} />   
    </>
  );
}