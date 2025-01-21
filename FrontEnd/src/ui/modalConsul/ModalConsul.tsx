import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import scss from "./modalConsul.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { toast } from "react-toastify";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
}

interface ModalConsulProps {
  type: "form" | "success";
  onClose: (type?: "success" | null) => void;
}

const ModalConsul: React.FC<ModalConsulProps> = ({ type, onClose }) => {
  const isSuccess = type === "success";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const massage = () => {
    toast.success("Ваш заказ успешно отправлен!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const submitToTelegram = async (data: FormData) => {
    try {
      const my_id = -1002043264040;
      const token = `7043496915:AAEoRK9THxBn75bvcsgliKltPXT25dHhvcc`;
      const api_url = `https://api.telegram.org/bot${token}/sendMessage`;

      const userInfo = {
        chat_id: my_id,
        parse_mode: "HTML",
        text: `Заказ:\nИмя: ${data.firstName}\nФамилия: ${data.lastName}\nТел номер: ${data.phone}\nПочта: ${data.email}\nАдрес: ${data.country}`,
      };

      await axios.post(api_url, userInfo);

      reset();
      localStorage.removeItem("basket");
      onClose("success");
      massage();
    } catch (error) {
      console.error("Ошибка при отправке данных в Telegram:", error);
      toast.error(
        "Произошла ошибка при отправке данных в Telegram. Попробуйте снова."
      );
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Данные формы: ", data);
    submitToTelegram(data);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={scss.modal} onClick={handleOverlayClick}>
      <div className={scss.modalContent}>
        <p className={scss.close} onClick={() => onClose()}>
          <IoCloseOutline />
        </p>
        {isSuccess ? (
          <div className={scss.icon}>
            <div className={scss.icon1}>
              <h1>
                <IoIosCheckmarkCircle />
              </h1>
              <h2>Спасибо!</h2>
              <p>Ваша заявка успешно отправлена!</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className={scss.title}>Оставьте заявку на консультацию</h2>

            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Имя"
                className={`${scss.input} ${
                  errors.firstName ? scss.errorInput : ""
                }`}
                {...register("firstName", { required: "Имя обязательно" })}
              />

              <input
                type="text"
                placeholder="Фамилия"
                className={`${scss.input} ${
                  errors.lastName ? scss.errorInput : ""
                }`}
                {...register("lastName", { required: "Фамилия обязательна" })}
              />

              <input
                type="email"
                placeholder="Почта"
                className={`${scss.input} ${
                  errors.email ? scss.errorInput : ""
                }`}
                {...register("email", {
                  required: "Почта обязательна",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Введите корректный email",
                  },
                })}
              />

              <input
                type="tel"
                placeholder="Номер"
                className={`${scss.input} ${
                  errors.phone ? scss.errorInput : ""
                }`}
                {...register("phone", {
                  required: "Номер обязателен",
                })}
              />

              <select
                className={`${scss.input} ${
                  errors.country ? scss.errorInput : ""
                }`}
                {...register("country", { required: "Страна обязательна" })}
              >
                <option value="">Выберите страну</option>
                <option value="Kyrgyzstan">Кыргызстан</option>
                <option value="Russia">Россия</option>
                <option value="Kazakhstan">Казахстан</option>
                <option value="Bishkek">Бишкек</option>
                <option value="Other">Другая страна</option>
              </select>

              <button type="submit" className={scss.submitButton}>
                Отправить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalConsul;
