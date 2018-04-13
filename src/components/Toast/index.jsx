import Notification from "rmc-notification";
import React from "react";
import "./style.scss"

let notification = null;
Notification.newInstance({style:{position:"fixed",top:"60%",display:"flex",justifyContent: "center",width:"100%",zIndex:1001}}, n => (notification = n));

function notice(content, type, duration, onClose, mask) {
  notification.notice({
    duration,
    mask,
    content: (
      <div className="toast">
        <div className={`text ${type}`}>{content}</div>
      </div>
    ),
    onClose() {
      onClose && onClose();
    }
  });
}

export default {
  show(content, duration, mask) {
    notice(content, "info", duration, () => {}, mask);
  },
  info(content, duration, onClose, mask) {
    notice(content, "info", duration, onClose, mask);
  },
  success(content, duration, onClose, mask) {
    notice(content, "success", duration, onClose, mask);
  },
  warn(content, duration, onClose, mask) {
    notice(content, "warn", duration, onClose, mask);
  },
  error(content, duration, onClose, mask) {
    notice(content, "error", duration, onClose, mask);
  }
}
