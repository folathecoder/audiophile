import { useState } from "react";
import Overlay from "components/shared/overlay/overlay";


const useOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return { showOverlay, setShowOverlay };
};

export default useOverlay;
