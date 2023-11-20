import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";
import ChangeAddressEvent from "../change-address.event";

export default class EnviaConsoleLogHandler implements EventHandlerInterface<CustomerCreatedEvent> {
    handle(event: ChangeAddressEvent): void {
        console.log(`Endereço do cliente: (${event.eventData.id}, ${event.eventData.name}) alterado para: ${event.eventData.address}`);
    }
}