import React from 'react';
import '../Styles/DeliveryPaymentPage.css';

const DeliveryPaymentPage = () => {
    return (
        <div className="delivery-payment-wrapper">
            <div className="container">
                <h1 className="title">Доставка и оплата</h1>
                
                <div className="delivery-section">
                    <h2 className="subtitle">Доставка в день заказа:</h2>
                    <p>Если Ваш заказ был оформлен до 10 часов утра, мы гарантируем доставку вашего товара в этот же день. Наша команда оперативно обрабатывает заказы и организует доставку, чтобы Вы могли получить желаемый товар как можно быстрее.</p>
                </div>
                
                <hr />

                <div className="delivery-section">
                    <h2 className="subtitle">Доставка на следующий день:</h2>
                    <p>Если Вы сделали заказ после 10 часов утра, не волнуйтесь, Ваш товар будет доставлен на следующий день. Мы понимаем, что быть терпеливым не всегда легко, но мы делаем все возможное, чтобы обеспечить быструю обработку и доставку даже для заказов, сделанных позже установленного времени.</p>
                    <p>Если Вы хотите отменить оформленный заказ, Вам нужно связаться с оператором до 20:00 предшествующему дню доставки по телефону 8 747 393 55 55, и сообщить номер заказа, который Вы хотели бы отменить.</p>
                </div>

                <hr />

                <div className="payment-section">
                    <h2 className="subtitle">Подарочные сертификаты в качестве оплаты:</h2>
                    <p>Подарочные сертификаты в качестве оплаты за заказы в интернет-магазине не принимаются.</p>
                </div>

                <hr />

                <div className="delivery-methods-section">
                    <h2 className="subtitle">Способы доставки по г. Алматы и Алматинской области:</h2>
                    <div className="delivery-method">
                        <h3 className="method-title">Доставка курьером</h3>
                        <p>При оформлении заказа в пределах квадрата, сумма доставки составляет 1500 тг. Стоимость доставки за пределами указанного квадрата рассчитывается индивидуально, согласно тарифам службы курьерской доставки.</p>
                        <p>После оформления заказа с Вами свяжется оператор интернет-магазина (по указанному вами номеру телефона), для подтверждения вашего заказа.</p>
                        <p>Если курьер, прибыв по адресу доставки, не смог дозвониться клиенту в течение 10 минут - заказ считается отменённым, и стоимость его доставки не возвращается.</p>
                    </div>
                </div>

                <hr />

                <div className="payment-methods-section">
                    <h2 className="subtitle">Доступные способы оплаты заказа:</h2>
                    <ul>
                        <li>Оплата картой онлайн</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPaymentPage;
