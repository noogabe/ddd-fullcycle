import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerChangeAddressEvent from "../customer-change-address.event";
import CustomerCreatedEvent from "../customer-created.event";

export default class EnviaConsoleLogHandler implements EventHandlerInterface<CustomerCreatedEvent> {
    handle(event: CustomerChangeAddressEvent): void {
        console.log(`Endereço do cliente: (${event.eventData.id}, ${event.eventData.name}) alterado para: ${event.eventData.address}`);
    }
}