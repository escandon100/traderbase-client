import {React , useState}from "react";
import "./referral.scss";
import { Copy , Check} from "lucide-react";

const Referral  = () => {
  const referralLink = "https://tradersbasefx.com/userRegister";

    const [copied, setCopied] = useState(false);
  



    const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="refer-users">
      <div className="refer-card">
        <h2 className="title">Refer & Earn</h2>
        <p className="subtitle">Invite your friends and earn rewards when they join.</p>

        <div className="referral-box">
          <input type="text" value={referralLink} readOnly />
          <button onClick={handleCopy} >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
        </div>
      </div>

      <div className="users-card">
        <h3 className="section-title">Your Referrals</h3>
          <table className="referral-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="noData">
                  <p className="no-referrals">You haven’t referred anyone yet.</p>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default Referral;
