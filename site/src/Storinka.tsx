function Storinka(){
    return  (    
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', overflow: 'hidden', position: 'absolute', top: 0, left: 0, }}>
        <video height="100%" controls style={{ objectFit: 'cover' }}>
          <source src="/Taxta.mp4" type="video/mp4" />
        </video>
      </div>
    );
};

export default Storinka;