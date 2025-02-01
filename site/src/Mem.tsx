function Mem() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '800px',
        overflow: 'hidden',
      }}
    >
      <video height="100%" controls style={{ objectFit: 'cover' }}>
        <source src="/Taxta.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Mem;
