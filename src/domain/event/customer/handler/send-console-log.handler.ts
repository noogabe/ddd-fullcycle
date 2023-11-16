import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";
import ProductCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLogHandler implements EventHandlerInterface<CustomerCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        console.log(`Endereço do cliente: (${event.eventData.id}, ${event.eventData.name}) alterado para: ${event.eventData.address}`);
    }
}