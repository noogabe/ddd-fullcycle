import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";
import ProductCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLog2Handler implements EventHandlerInterface<CustomerCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        console.log(`Este é o segundo console log do evento ${event.constructor.name}`);
    }
}