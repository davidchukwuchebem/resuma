import { useState } from "react";
import Templates from "./Templates";
import Text from "./Text";
import Layout from "./Layout";
import { useResumeDataContext } from "../../contexts/ResumeDataProvider"; // Update path if needed

export default function TemplateSidePanel() {
  const [currentTab, setCurrentTab] = useState("templates");
  const { selectedTemplate, setSelectedTemplate } = useResumeDataContext();

  return (
    <div className="sidebar">
      <div className="wrapper">
             <div className="sidebar-btn-container">
        <button
          className={`sidebar-btn ${currentTab === "templates" && "active"}`}
          onClick={() => setCurrentTab("templates")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.22172 0.454432L1.06941 3.13655C0.426388 3.37725 0 3.9962 0 4.68392V12.4242C0 13.0501 0.354177 13.6209 0.911232 13.8994L8.06354 17.4755C8.52775 17.7094 9.07449 17.7094 9.5387 17.4755L16.691 13.8994C17.2515 13.6209 17.6022 13.0466 17.6022 12.4242V4.68392C17.6022 3.9962 17.1759 3.38069 16.5328 3.13999L9.38053 0.457871C9.00916 0.313449 8.59653 0.313449 8.22172 0.454432ZM8.80284 2.58981L15.405 5.06561V5.10343L8.80284 7.78555L2.20071 5.10343V5.06561L8.80284 2.58981ZM9.9032 14.8313V9.71117L15.405 7.47607V12.0804L9.9032 14.8313Z"
              fill="#141414"
            />
          </svg>
          Templates
        </button>
        <button
          className={`sidebar-btn ${currentTab === "text" && "active"}`}
          onClick={() => setCurrentTab("text")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3689 15.1785H16.4649L11.4174 1.18756C11.3343 0.94325 11.1767 0.731104 10.9669 0.580888C10.757 0.430672 10.5054 0.349924 10.2473 0.349976H8.42622C8.16815 0.349924 7.91654 0.430672 7.70669 0.580888C7.49685 0.731104 7.33929 0.94325 7.25615 1.18756L2.20864 15.1785H1.30464C1.14077 15.1785 0.98362 15.2436 0.867749 15.3595C0.751878 15.4754 0.686783 15.6325 0.686783 15.7964L0.686783 17.0321C0.686783 17.196 0.751878 17.3531 0.867749 17.469C0.98362 17.5849 1.14077 17.65 1.30464 17.65H6.2475C6.41136 17.65 6.56852 17.5849 6.68439 17.469C6.80026 17.3531 6.86535 17.196 6.86535 17.0321V15.7964C6.86535 15.6325 6.80026 15.4754 6.68439 15.3595C6.56852 15.2436 6.41136 15.1785 6.2475 15.1785H5.49139L6.39115 12.7071H12.2824L13.1822 15.1785H12.4261C12.2622 15.1785 12.105 15.2436 11.9892 15.3595C11.8733 15.4754 11.8082 15.6325 11.8082 15.7964V17.0321C11.8082 17.196 11.8733 17.3531 11.9892 17.469C12.105 17.5849 12.2622 17.65 12.4261 17.65H17.3689C17.5328 17.65 17.6899 17.5849 17.8058 17.469C17.9217 17.3531 17.9868 17.196 17.9868 17.0321V15.7964C17.9868 15.6325 17.9217 15.4754 17.8058 15.3595C17.6899 15.2436 17.5328 15.1785 17.3689 15.1785ZM7.51603 9.61783L9.33678 4.61744L11.1575 9.61783H7.51603Z"
              fill="#141414"
            />
          </svg>
          Text
        </button>
        <button
          className={`sidebar-btn ${currentTab === "layout" && "active"}`}
          onClick={() => setCurrentTab("layout")}
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.68234 4.94529V0.349976H0.924524C0.475129 0.349976 0.113586 0.711519 0.113586 1.16091V16.839C0.113586 17.2884 0.475129 17.65 0.924524 17.65H12.2776C12.727 17.65 13.0886 17.2884 13.0886 16.839V5.75623H8.49327C8.04726 5.75623 7.68234 5.3913 7.68234 4.94529ZM13.0886 4.46886V4.67498H8.76359V0.349976H8.9697C9.18595 0.349976 9.39206 0.434448 9.54411 0.586499L12.8521 3.89783C13.0041 4.04988 13.0886 4.25599 13.0886 4.46886Z"
              fill="#141414"
            />
          </svg>
          Layout
        </button>
        </div>

        {currentTab === "templates" && (
          <Templates
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />
        )}
        {currentTab === "text" && <Text />}
        {currentTab === "layout" && <Layout />}
      </div>
    </div>
  );
}
