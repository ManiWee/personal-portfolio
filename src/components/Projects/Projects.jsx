import React from 'react'

const Projects = () => {
  return (
    <div id="projects" style={{ padding: '100px 10%', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Featured Work</h2>
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        
        {/* Project Card 1 */}
        <div style={{ background: '#483B47', padding: '30px', borderRadius: '15px', maxWidth: '400px', textAlign: 'left' }}>
          <h3 style={{ marginBottom: '15px', color: '#E010DC' }}>Finance Dashboard</h3>
          <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
            A dynamic dashboard interface built with React, utilizing local storage for data persistence and seamless transaction filtering.
          </p>
        </div>

        {/* Project Card 2 */}
        <div style={{ background: '#483B47', padding: '30px', borderRadius: '15px', maxWidth: '400px', textAlign: 'left' }}>
          <h3 style={{ marginBottom: '15px', color: '#E010DC' }}>Mobile Solutions</h3>
          <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
            Cross-platform application architectures leveraging React Native and Flutter, connected to robust Node.js and MongoDB backends.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Projects