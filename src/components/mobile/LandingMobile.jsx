import React, { useState } from 'react';
import mobileContent from '../../assets/folk_landing_text.svg';
import FixedButton from './FixedButton';
import Modal from '../common/Modal';
import useFingerprint from '../../hooks/useFingerprint';
import DesktopLeft1 from '../../assets/folk-appview1.svg';
import DesktopRight1 from '../../assets/folk-appview2.svg';
import DesktopLeft2 from '../../assets/folk-appview3.svg';
import DesktopRight2 from '../../assets/folk-appview4.svg';

function LandingMobile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fingerprint = useFingerprint();
    return (
        <div style={{ position: 'relative', paddingBottom: '60px', width : '100%'}}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '60px 0px',
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <img
                    src={mobileContent}
                    alt="mobileview"
                    style={{ width: '90%', maxWidth: '400px' }}
                />
                <div style={{ display: 'flex', flexDirection: "row", gap: "15px", marginTop: "50px", width: '90%', maxWidth: '400px' }}>
                    <div style={{ flex: 1 }}>
                        <img src={DesktopLeft1} alt="mobileleft" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8'}} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src={DesktopRight1} alt="mobileright" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: "row", gap: "15px", marginTop: "50px", width: '90%', maxWidth: '400px' }}>
                    <div style={{ flex: 1 }}>
                        <img src={DesktopLeft2} alt="mobileleft" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8'}} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src={DesktopRight2} alt="mobileright" style={{ width: '100%', height: 'auto', border : '1px solid #E8E8E8' }} />
                    </div>
                </div>
            </div>
            <FixedButton onClick={() => setIsModalOpen(true)} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} fingerprint={fingerprint} />
        </div>
    );
}

export default LandingMobile;