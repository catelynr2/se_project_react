import "./App.css";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  deleteItem,
  getItems,
  addItem,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import { signup, signin, checkToken, editProfile } from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  // const weatherTemp = "75°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenEditProfileModal = () => {
    setActiveModal("edit");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleSignUp = ({ name, avatar, email, password }) => {
    return signup({ name, avatar, email, password })
      .then((user) => {
        handleLogin({ email, password }).then(() => {
          handleCloseModal();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    return signin({ email, password })
      .then((res) => {
        const token = res.token;
        localStorage.setItem("jwt", res.token);
        return checkToken(token).then((data) => {
          const user = data;
          setLoggedIn(true);
          setCurrentUser(user);
          handleCloseModal();
          history.push("/profile");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditProfileSubmit = ({ name, avatar }) => {
    editProfile({ name, avatar })
      .then(({ data }) => {
        setCurrentUser(data);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    setCurrentUser({});
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  };

  const handleLikeClick = ({ selectedCard, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(selectedCard, token)
          .then((updatedCard) => {
            console.log(updatedCard);
            setClothingItems((cards) => {
              return cards.map((card) => {
                console.log(card, selectedCard);
                return card._id === selectedCard._id ? updatedCard : card;
              });
            });
          })
          .catch((err) => console.log(err))
      : removeCardLike(selectedCard, token)
          .then((updatedCard) => {
            console.log(updatedCard);
            setClothingItems((cards) => {
              return cards.map((card) =>
                card._id === selectedCard._id ? updatedCard : card
              );
            });
          })
          .catch((err) => console.log(err));
  };

  const onAddItem = (values) => {
    addItem(values)
      .then(({ data }) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  const handleDeleteCard = (selectedCard) => {
    deleteItem(selectedCard)
      .then(() => {
        const newClothesList = clothingItems.filter((cards) => {
          return cards._id !== selectedCard._id;
        });
        setClothingItems(newClothesList);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .then(() => {
          if (currentUser) {
            history.push("/profile");
          } else {
            history.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        {
          handleCloseModal();
        }
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onSignUp={handleOpenRegisterModal}
            onLogin={handleOpenLoginModal}
            loggedIn={loggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleLikeClick}
                loggedIn={loggedIn}
              />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                clothingItems={clothingItems}
                handleCreateModal={handleCreateModal}
                onSelectCard={handleSelectedCard}
                onEditProfile={handleOpenEditProfileModal}
                onCardLike={handleLikeClick}
                loggedIn={loggedIn}
                onLogout={handleLogout}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              handleDeleteCard={handleDeleteCard}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              buttonText={"Next"}
              secondaryButtonText={"or Login"}
              onSignUp={handleSignUp}
              onAltButton={handleOpenLoginModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              buttonText={"Login"}
              secondaryButtonText={"or Register"}
              onLogin={handleLogin}
              onAltButton={handleOpenRegisterModal}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              handleEditProfile={handleEditProfileSubmit}
              buttonText={"Save changes"}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
