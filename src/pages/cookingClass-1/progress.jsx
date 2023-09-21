import React from 'react'

function Progress() {
  return (
    <>
     <div className="py-5">
                <p className="text-xl font-semibold">Course Progress: <span>55%</span></p>
                <div class="progress">
                  <div class="bar bg-primary-clr2" style={{width:"55%"}}>
                  </div>
                </div>
    </div>
    </>
  )
}

export default Progress