import { useState } from "react";
import { useCourseStore } from "../store/courseStore";

const DropButton = ({ id }: { id: string }) => {
  const dropCourse = useCourseStore((state) => state.dropCourse);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleWithdraw = () => {
    setShowConfirm(true);
  };

  const confirmWithdraw = () => {
    dropCourse(id); // ถอนจริง
    setShowConfirm(false);
  };

  const cancelWithdraw = () => {
    setShowConfirm(false);
  };

  return (
    <>
      {/* ปุ่มถอน */}
      <button
        onClick={handleWithdraw}
        className="add-button w-full"
      >
        ถอน
      </button>

      {/* Popup ยืนยัน */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80 animate-fadeIn">
            <h3 className="text-lg font-bold mb-4">
              คุณแน่ใจหรือไม่ว่าจะถอนวิชานี้?
            </h3>
            <div className="flex justify-around">
              <button
                onClick={confirmWithdraw}
                className="yes-button"
              >
                ยืนยัน
              </button>
              <button
                onClick={cancelWithdraw}
                className="return-button"
              >
                ย้อนกลับ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DropButton;
